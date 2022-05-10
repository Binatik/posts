export class postService {
  static async getPosts(limit) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=${limit}`);
    return response.json();
  }
}
