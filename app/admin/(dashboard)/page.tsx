"use client";

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import ServicesAdmin from "@/components/admin/ServicesAdmin"
import GalleryAdmin from "@/components/admin/GalleryAdmin"
import FullGalleryAdmin from "@/components/admin/FullGalleryAdmin"
import UpdatesAdmin from "@/components/admin/UpdatesAdmin"
import {
  FileText,
  Image as ImageIcon,
} from 'lucide-react';

export default function AdminDashboard() {
  const searchParams = useSearchParams()
  const section = searchParams.get("section")

  const renderContent = () => {
    switch (section) {
      case "services":
        return <ServicesAdmin />
      case "gallery":
        return <GalleryAdmin />
      case "fullgallery":
        return <FullGalleryAdmin />
      case "updates":
        return <UpdatesAdmin />
      default:
        return <p>Select a section to manage.</p>
    }
  }

  return (
    <div className="flex-1 p-8">
      {renderContent()}
    </div>
  )
} 