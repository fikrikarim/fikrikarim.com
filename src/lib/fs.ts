import { PathLike } from "fs";
import { readdir } from "fs/promises";

// https://stackoverflow.com/a/24594123
export const getDirectories = async (source: PathLike) =>
  (await readdir(source, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
