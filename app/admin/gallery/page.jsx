"use client";
import React, { useState } from "react";
import GalleryAdmin from "@/components/admin/GalleryAdmin";
import initialGalleryConfig from "../../../galleryConfig/galleryConfig";

export default function GalleryAdminPage() {
  const [galleryConfig, setGalleryConfig] = useState(initialGalleryConfig);
  return <GalleryAdmin config={galleryConfig} setConfig={setGalleryConfig} />;
} 