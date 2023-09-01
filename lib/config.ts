import fs from "fs/promises";
import os from "os";

const CONFIG_FILE_DIR = `${os.homedir()}/.config/valve`;
const CONFIG_FILE_PATH = `${CONFIG_FILE_DIR}/settings.json`;

export async function writeConfig(config) {
  await fs.mkdir(CONFIG_FILE_DIR, { recursive: true });
  await fs.writeFile(CONFIG_FILE_PATH, JSON.stringify(config, null, 2));
}

export async function readConfig() {
  try {
    await fs.access(CONFIG_FILE_PATH);
  } catch (err) {
    console.error(err);
    return {};
  }
  try {
    const config = await fs.readFile(CONFIG_FILE_PATH, "utf-8");
    return JSON.parse(config);
  } catch (err) {
    console.error(err);
    return {};
  }
}
