export type PlaceType = {
  name: string;
  location: string;
  price: string;
  stars: string;
  img: string;
};
export const PlacesData: PlaceType[] = [
  {
    name: "Lembang",
    location: "Bandung",
    img: "/place-1.png",
    price: "850k",
    stars: "4.5",
  },
  {
    name: "Orias Centre",
    location: "Batam",
    img: "/place-2.png",
    price: "999k",
    stars: "4.8",
  },
  {
    name: "Ahya",
    location: "Tanjungpinang",
    img: "/place-3.png",
    price: "1.250k",
    stars: "5.0",
  },
  {
    name: "Rica",
    location: "Jakarta",
    img: "/place-4.png",
    price: "450k",
    stars: "4.2",
  },
];
