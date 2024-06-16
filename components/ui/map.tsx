'use client'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'
import 'leaflet-defaulticon-compatibility'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { H1 } from '@/components/ui/typography'

const Map = () => {
  const position: [number, number] = [49.748564067315094, 13.381859299917464]

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <H1 className="uppercase">
        <span className="underline-offset-3 text-blue decoration-8">Poloha</span>
      </H1>

      <div className="flex flex-col items-center">
        <p className="text-center">Courtyard by Marriott</p>
        <p className="text-center">sady 5. května 57, 301 00 Plzeň 3</p>
      </div>
      <MapContainer
        className="h-[600px] w-full"
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Poloha místa svatby</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map
