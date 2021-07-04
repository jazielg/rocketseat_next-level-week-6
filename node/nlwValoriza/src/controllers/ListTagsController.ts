import { ListTagsService } from "../services/ListTagsService";

class ListTagsController {
  async handle(request, response) {
    const listTagsService = new ListTagsService();

    const tags = await listTagsService.execute();

    return response.json(tags);
  }
}

export { ListTagsController };
