import Crypto from "../entity/Crypto.js";
import CryptoRepository from "../repository/CryptoRepository.js";

class CryptoService {
  constructor({ repository } = {}) {
    this.repository = repository || new CryptoRepository();
  }
  async *list() {
    let currentPage = 1;

    while (true) {
      const { data } = await this.repository.list(currentPage++);

      yield data.map((crypto) => new Crypto(crypto));
    }
  }
}

export default CryptoService;
