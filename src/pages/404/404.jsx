// Set 404 page for unknown routes

import { NavLink } from 'react-router-dom'

export default function Error404() {
  return (
    <main className="errorPage">
      <section className="errorPage__content">
        <div className="errorPage__type">404</div>
        <div className="errorPage__title">
          Oups! La page que vous demandez n'existe pas.
        </div>
        <NavLink to="/" className="errorPage__link">
          Retourner à la page d'acceuil'
        </NavLink>
      </section>
    </main>
  )
}
