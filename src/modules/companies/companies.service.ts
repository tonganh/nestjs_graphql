import { Injectable } from '@nestjs/common';
import { CompaniesOutput } from './output/companies.output';
import { HttpDataService } from '../http-data/http-data.service';
import { IWebpromiseCompaniesData } from './interface/webpromise.companies.data.interface';
import { IWebpromiseTravelData } from './interface/webpromise.travel.data.interface';

@Injectable()
export class CompaniesService {
  constructor(private readonly httpDataService: HttpDataService) {}

  async getWebpromisesCompanies() {
    const urlGetWebpromisesCompanies =
      'https://5f27781bf5d27e001612e057.mockapi.io/webprovise/companies';
    return await this.httpDataService.getData(urlGetWebpromisesCompanies);
  }

  async getWebPromisesTravels() {
    const urlGetWebpromisesTravels =
      'https://5f27781bf5d27e001612e057.mockapi.io/webprovise/travels';
    const dataFromURL: IWebpromiseTravelData[] =
      await this.httpDataService.getData(urlGetWebpromisesTravels);
    const data: IWebpromiseTravelData[] = dataFromURL.map((e) => {
      return {
        ...e,
        price: parseFloat(`${e.price}`),
      };
    });
    return data;
  }


  nestDataWithParentAndChildren(
    webpromiseCompaniesData: IWebpromiseCompaniesData[],
    webpromiseChildrenData: IWebpromiseCompaniesData[],
    webpromiseTravelData: IWebpromiseTravelData[],
  ) {
    const data: CompaniesOutput[] = webpromiseChildrenData.map(
      (parentCompany) => {
        const {
          id: parentCompanyId,
          createdAt,
          name,
          parentId,
        } = parentCompany;

        const listCompaniesChildren = webpromiseCompaniesData.filter(
          (company) => company.parentId === parentCompanyId,
        );

        const dataCheckLevel2 = this.nestDataWithParentAndChildren(
          webpromiseCompaniesData,
          listCompaniesChildren,
          webpromiseTravelData,
        );

        const companyResponseData: CompaniesOutput = {
          id: parentCompanyId,
          createdAt,
          name,
          parentId,
          children: dataCheckLevel2,
        };

        return companyResponseData;
      },
    );

    return data;
  }

  processDataParentChildren(
    webpromiseCompaniesData: IWebpromiseCompaniesData[],
    webpromiseTravelData: IWebpromiseTravelData[],
  ) {
    const data: CompaniesOutput[] = webpromiseCompaniesData.map(
      (parentCompany) => {
        const {
          id: parentCompanyId,
          createdAt,
          name,
          parentId,
        } = parentCompany;

        const listCompaiesChildren = webpromiseCompaniesData.filter(
          (company) => company.parentId === parentCompanyId,
        );

        const companyResponseData: CompaniesOutput = {
          id: parentCompanyId,
          createdAt,
          name,
          parentId,
          children: this.nestDataWithParentAndChildren(
            webpromiseCompaniesData,
            listCompaiesChildren,
            webpromiseTravelData,
          ),
        };
        return companyResponseData;
      },
    );

    return data;
  }

  getAllChildCompanyIds(companiesInput: CompaniesOutput) {
    const { children } = companiesInput;
    const companyIds1 = children.map((e) => e.id);
    children.forEach((e) => {
      const ids = this.getAllChildCompanyIds(e);
      companyIds1.push(...ids);
    });
    return companyIds1;
  }

  calculateCostFromTravelData(
    companyIds: string[],
    webpromiseTravelData: IWebpromiseTravelData[],
  ) {
    const travelDataNeedCalculate = webpromiseTravelData.filter((travelData) =>
      companyIds.includes(travelData.companyId),
    );
    const cost = travelDataNeedCalculate.reduce((accumulator, company) => {
      return accumulator + company.price;
    }, 0);

    return cost;
  }

  calculateCost(
    companiesInput: CompaniesOutput[],
    webpromiseTravelData: IWebpromiseTravelData[],
  ) {
    const dataAfterCalculate = companiesInput.map((company) => {
      const childCompaniesIds = this.getAllChildCompanyIds(company);
      const companyIds = [...childCompaniesIds, company.id];
      const { children } = company;
      company.cost = this.calculateCostFromTravelData(
        companyIds,
        webpromiseTravelData,
      );

      const childrenAfterCalculateCost = this.calculateCost(
        children,
        webpromiseTravelData,
      );

      company.children = childrenAfterCalculateCost;
      return company;
    });

    return dataAfterCalculate;
  }

  async getCompaniesData(): Promise<CompaniesOutput[]> {
    const webpromiseCompaniesData: IWebpromiseCompaniesData[] =
      await this.getWebpromisesCompanies();
    const webpromiseTravelData: IWebpromiseTravelData[] =
      await this.getWebPromisesTravels();

    const dataAfterNestChildren: CompaniesOutput[] =
      this.processDataParentChildren(
        webpromiseCompaniesData,
        webpromiseTravelData,
      );

    const dataAfterCalculate = this.calculateCost(
      dataAfterNestChildren,
      webpromiseTravelData,
    );

    return dataAfterCalculate;
  }
}
