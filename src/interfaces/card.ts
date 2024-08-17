import type Pengiklan from "./pengiklans";

export default interface Card {
    id: number;
    attributes: {
      judul: string;
      deskripsi: string;
      pengiklans: {
        data: Pengiklan;
      };
    };
}