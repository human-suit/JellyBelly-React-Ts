export type historyType = {
  currentPage: number;
  items: {
    description: string;
    mileStoneId: number;
    year: number;
  }[];
  pageSize: number;
  totalCount: number;
  totalPages: number;
};

export type combinType = {
  currentPage: number;
  items: {
    name: string;
    combinationId: number;
    tag: string[];
  }[];
  pageSize: number;
  totalCount: number;
  totalPages: number;
};

export type recipesType = {
  currentPage: number;
  items: {
    recipeId: number;
    name: string;
    description: string;
    prepTime: string;
    cookTime: string;
    totalTime: string;
    makingAmount: string;
    imageUrl: string;
    ingredients: string[];
    additions1: string[];
    additions2: [];
    additions3: [];
    directions: string[];
    tips: string[];
  }[];
  pageSize: number;
  totalCount: number;
  totalPages: number;
};

export type factsType = {
  currentPage: number;
  items: {
    factId: number;
    title: string;
    description: string;
  }[];
  pageSize: number;
  totalCount: number;
  totalPages: number;
};
export type beansType = {
  currentPage: number;
  items: {
    beanId: number;
    groupName: string[];
    ingredients: string[];
    flavorName: string;
    description: string;
    colorGroup: string;
    backgroundColor: string;
    imageUrl: string;
    glutenFree: boolean;
    sugarFree: boolean;
    seasonal: boolean;
    kosher: boolean;
  }[];
  pageSize: number;
  totalCount: number;
  totalPages: number;
};
export type beanType = {
  beanId: number;
  groupName: string[];
  ingredients: string[];
  flavorName: string;
  description: string;
  colorGroup: string;
  backgroundColor: string;
  imageUrl: string;
  glutenFree: boolean;
  sugarFree: boolean;
  seasonal: boolean;
  kosher: boolean;
};
