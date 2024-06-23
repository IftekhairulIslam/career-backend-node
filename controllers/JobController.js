class JobController {
  static async getAllJobPosts(req, res, next) {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos").then(
      (response) => response.json()
    );

    res.status(200).send({
      data: data,
    });
  }
}

export default JobController;
