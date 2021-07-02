const { Command, flags } = require("@oclif/command");
const { DownloaderHelper } = require("node-downloader-helper");
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
var AdmZip = require('adm-zip');
var fs = require('fs');

const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }); // big_red_donkey

const shortName = uniqueNamesGenerator({
  dictionaries: [adjectives, animals, colors], // colors can be omitted here as not used
  length: 2
}); 

class CreateCommand extends Command {
  async run() {
    const { flags } = this.parse(CreateCommand);
    const name = flags.name || shortName;
    const path = flags.path || "./";
    this.log(`Creating new project ${name}`);
    const dl = new DownloaderHelper(
      "https://github.com/testvagrant/Ekam-Template/raw/main/ekam-template.zip",
      `${path}`
    );
    dl.on("end", () => {
      var zip = new AdmZip(`${path}ekam-template.zip`);
      zip.extractAllTo(`${path}${name}`, true);
      fs.unlinkSync(`${path}ekam-template.zip`);
      this.log(`Created new project ${name}`);
    });
    dl.start();
  }
}

CreateCommand.description = `Create e new ekam project`;

CreateCommand.flags = {
  name: flags.string({ char: "n", description: "name of project" }),
  path: flags.string({ char: "p", description: "path to create project" }),
};

module.exports = CreateCommand;
