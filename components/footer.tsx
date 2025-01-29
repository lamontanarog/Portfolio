export function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}