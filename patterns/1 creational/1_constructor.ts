class Server {
  name: string;
  ip: string;
  constructor(name: string, ip: string) {
    this.name = name;
    this.ip = ip;
  }

  getUrl() {
    return `https://${this.ip}:80`;
  }
}

const aws = new Server("AWS German", "82.21.21.32");
console.log(aws.getUrl());
