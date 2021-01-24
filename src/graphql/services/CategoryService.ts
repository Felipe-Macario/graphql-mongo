import { Service } from 'typedi';
import mongoose from 'mongoose';

import CategorySchema from '../../schema/CategorySchema';
import CategoryInput from '../resolvers/types/CategoryInput';

@Service()
export default class CategoryService {
    private categoryModel: mongoose.Model<any>;

    constructor() {
        this.categoryModel = CategorySchema;
    }

    async getOne(id: string) {
        const category = await this.categoryModel.findById(id);
        return category;
    }

    async getAll() {
        const categories = await this.categoryModel.find();
        return categories;
    }
        
    async addCategory(data: CategoryInput) {
        const category = await this.categoryModel.create(data);
        return category;
    }

    async deleteCategory(id: string){
        try {
            await this.categoryModel.findByIdAndRemove(id);
            return true;
        } catch {
        return false;
        }    
    }
}