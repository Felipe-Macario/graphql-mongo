import { Service } from 'typedi';
import mongoose from 'mongoose';

import VideoSchema from '../../schema/VideoSchema';
import VideoInput from '../resolvers/types/VideoInput';

@Service()
export default class VideoService {
    private videoModel: mongoose.Model<any>;

    constructor() {
        this.videoModel = VideoSchema;
    }

    async getOne(id: string) {
        const video = await this.videoModel.findById(id);
        return video;
    }

    async getAll() {
        const videos = await this.videoModel.find();
        return videos;
    }
        
    async addVideo(data: VideoInput) {
        const video = await this.videoModel.create(data);
        return video;
    }

    async deleteVideo(id: string){
        try {
            await this.videoModel.findByIdAndRemove(id);
            return true;
        } catch {
        return false;
        }    
    }
}