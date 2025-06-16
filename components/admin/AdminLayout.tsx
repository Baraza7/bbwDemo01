import Link from 'next/link'
import { ArrowLeft, Home, Settings } from 'lucide-react'

interface AdminLayoutProps {
  children: React.ReactNode
  title: string
  breadcrumbs?: { label: string; href?: string }[]
  showBackButton?: boolean
  backHref?: string
}

export default function AdminLayout({ 
  children, 
  title, 
  breadcrumbs = [], 
  showBackButton = true,
  backHref = '/admin'
}: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Navigation */}
            <div className="flex items-center space-x-4">
              {showBackButton && (
                <Link 
                  href={backHref}
                  className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Link>
              )}
              
              {/* Breadcrumbs */}
              <nav className="flex items-center space-x-2 text-sm">
                <Link href="/" className="text-gray-500 hover:text-gray-700 flex items-center">
                  <Home className="w-4 h-4 mr-1" />
                  Home
                </Link>
                <span className="text-gray-400">/</span>
                <Link href="/admin" className="text-gray-500 hover:text-gray-700">
                  Admin
                </Link>
                {breadcrumbs.map((crumb, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-gray-400">/</span>
                    {crumb.href ? (
                      <Link href={crumb.href} className="text-gray-500 hover:text-gray-700">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-gray-900 font-medium">{crumb.label}</span>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Right side - Admin indicator */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Settings className="w-4 h-4" />
              <span>Admin Panel</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        </div>
        {children}
      </main>
    </div>
  )
} 