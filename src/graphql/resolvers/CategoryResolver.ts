import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

import Category from '../entities/Category';
import CategoryService from '../services/CategoryService';
import CategoryInput from './types/CategoryInput';

@Service()
@Resolver(Category)
export default class CategoryResolver {
  constructor(
    private readonly categoryService: CategoryService,
  ) {}

    @Query(() => Category)
    async category(@Arg("id") id: string) {
        const categorie = await this.categoryService.getOne(id);
        return categorie;
    }

    @Query(() => [Category])
    async categories() {
        const categories = await this.categoryService.getAll();
        return categories;
    }

    @Mutation(() => Category)
    async createCategory(@Arg("categoryInput") categoryInput: CategoryInput) {
        const category = await this.categoryService.addCategory(categoryInput);
        return category;
    }

    @Mutation(() => Boolean)
    async removeCategory(@Arg("id") id: string) {
      return await this.categoryService.deleteCategory(id);
    }
}