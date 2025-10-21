import React from "react"
import Hero from "../components/Hero"
import Products from "../components/Products"

export default function Home() {
  return (
    <div>
      <Hero title="Bienvenido a nuestra tienda" subtitle="Los mejores depósitos de poliéster" />
      <Products />
    </div>
  )
}
