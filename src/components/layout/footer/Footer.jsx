
const Footer = () => {
  return (
    <footer>
    <div className="footer-content">
      <p style={{textAlign:"center",display:"flex", justifyContent:"center", fontSize: "20px", paddingTop: "35px"}}>
        TecnoLomas &copy; {new Date().getFullYear()} Todos los derechos reservados
      </p>
    </div>
  </footer>
  )
}

export default Footer