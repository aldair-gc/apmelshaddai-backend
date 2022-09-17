class HomeController {
  async index(req, res) {
    res.send('APMELSHADDAI-SERVER is online');
  }
}

export default new HomeController();
