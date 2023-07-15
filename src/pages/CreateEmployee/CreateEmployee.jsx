import Header from '../../components/Header/Header'

export default function CreateEmployee() {
  return (
    <>
      <div className="layout__header">
        <Header />
      </div>
      <main className="createEmployee__container">
        <div>
          <header>Create Employee</header>
          <div>
            Box Form
            <div>Box info perso</div>
            <div>Box Adresse</div>
          </div>
          <div>Box button</div>
        </div>
      </main>
    </>
  )
}
