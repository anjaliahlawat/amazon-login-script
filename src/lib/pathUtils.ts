import { mkdir } from "fs";

async function createDir(path: string): Promise<void> {
  let baseDir = "./";
  await Promise.all(
    path.split("/").map((dirname) => {
      mkdir(baseDir + dirname, { recursive: true }, (err) => {
        if (err) {
          return console.log(err);
        }
        return 0;
      });
      baseDir = `${baseDir + dirname}/`;
      return 0;
    })
  );
}

export default createDir;
