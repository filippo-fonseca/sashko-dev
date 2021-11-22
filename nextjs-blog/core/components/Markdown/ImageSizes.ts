export interface ImageSize {
  width: number;
  height: number;
}

export type ImageSizes = Record<string, ImageSize>;

export const imageSizes: ImageSizes = {
  "xampp-control-panel": {
    width: 1333,
    height: 684,
  },
  "create-database": {
    width: 847,
    height: 469,
  },
  "import-button": {
    width: 1587,
    height: 83,
  },
  "database-browse": {
    width: 1135,
    height: 376,
  },
  "snaily-cad-root-folder": {
    width: 1360,
    height: 978,
  },
  "server-folder-config": {
    width: 1102,
    height: 433,
  },
};
