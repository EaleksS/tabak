import { FC } from "react";
import { Map, YMaps, Placemark } from "@pbe/react-yandex-maps";

export const MapYan: FC = (): JSX.Element => {
  return (
    <YMaps>
      <Map
        defaultState={{ center: [59.880387, 30.400498], zoom: 15 }}
        width="100%"
        height="300px"
      >
        <Placemark geometry={[59.880387, 30.400498]} />
      </Map>
    </YMaps>
  );
};
