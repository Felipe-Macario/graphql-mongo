import { Arg, FieldResolver, Mutation, Query, Resolver, ResolverInterface, Root } from 'type-graphql';
import { Service } from 'typedi';

import Video from '../entities/Video';
import CategoryService from '../services/CategoryService';
import VideoService from '../services/VideoService';
import VideoInput from './types/VideoInput';

@Service()
@Resolver(Video)
export default class VideoResolver implements ResolverInterface<Video>  {
    constructor(
      private readonly videoService: VideoService,
      private readonly categoryService: CategoryService
    ) {}

    @Query(() => Video)
    async video(@Arg("id") id: string) {
        const video = await this.videoService.getOne(id);
        return video;
    }

    @Query(() => [Video])
    async videos() {
        const videos = await this.videoService.getAll();
        return videos;
    }

    @Mutation(() => Video)
    async createVideo(@Arg("videoInput") videoInput: VideoInput) {
        const video = await this.videoService.addVideo(videoInput);
        return video;
    }

    @Mutation(() => Boolean)
    async removeVideo(@Arg("id") id: string) {
      return await this.videoService.deleteVideo(id);
    }

    @FieldResolver()
    async category(@Root() video: any) {
      return await this.categoryService.getOne(video.category._id);
    }
}