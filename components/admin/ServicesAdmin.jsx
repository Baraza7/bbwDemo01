"use client"

import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit, Save, X, Briefcase, FileText, DollarSign, Shield, Zap, Settings, Handshake } from 'lucide-react';
import FloatingAdminNav from './FloatingAdminNav';

const ServicesAdmin = ({ config: staticConfig }) => {
  const [servicesConfig, setServicesConfig] = useState(staticConfig);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [editingService, setEditingService] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Available icons for services
  const availableIcons = [
    { name: 'Briefcase', component: Briefcase, value: 'Briefcase' },
    { name: 'FileText', component: FileText, value: 'FileText' },
    { name: 'DollarSign', component: DollarSign, value: 'DollarSign' },
    { name: 'Shield', component: Shield, value: 'Shield' },
    { name: 'Zap', component: Zap, value: 'Zap' },
    { name: 'Settings', component: Settings, value: 'Settings' },
    { name: 'Handshake', component: Handshake, value: 'Handshake' },
  ];

  // Fetch latest config from API
  useEffect(() => {
    async function fetchConfig() {
      try {
        const res = await fetch('/api/services');
        if (!res.ok) throw new Error('Failed to fetch services config');
        const data = await res.json();
        setServicesConfig(data);
      } catch (err) {
        setError('Could not load latest services config.');
        const defaultConfig = staticConfig || {
          settings: {
            servicesPerPage: 6,
            showDescriptions: true,
            showIcons: true,
            enableCategories: true,
            featuredServiceId: ""
          },
          services: []
        };
        setServicesConfig(defaultConfig);
      } finally {
        setLoading(false);
      }
    }
    fetchConfig();
  }, [staticConfig]);

  // Existing services data to migrate
  const existingServices = [
    {
      title: "Bid Securities",
      description: "Provides financial assurance to project owners that bidders will honor their obligations, facilitating seamless participation in tenders.",
      icon: "FileText",
      href: "/services/bid-securities"
    },
    {
      title: "Performance Guarantees", 
      description: "A guarantee issued to a procuring entity on behalf of the winning bidder to guarantee successful completion of the awarded project.",
      icon: "Handshake",
      href: "/services/performance-guarantees"
    },
    {
      title: "Advance Payment Guarantees",
      description: "Issued on behalf of our clients to secure upfront payments for jobs awarded but not yet executed, enabling project mobilization.",
      icon: "DollarSign", 
      href: "/services/advance-payment-guarantees"
    },
    {
      title: "Contractors' All Risk Insurance",
      description: "Comprehensive insurance coverage protecting against all risks associated with construction projects and work-related injuries.",
      icon: "Shield",
      href: "/services/contractors-insurance"
    },
    {
      title: "Trade Finance Solutions",
      description: "Innovative and flexible financing that optimizes cash flow and mitigates risks associated with domestic and international trade.",
      icon: "Briefcase",
      href: "/services/trade-finance"
    },
    {
      title: "Investment Advisory",
      description: "Expert advisory services to help you navigate financial markets and make informed decisions to grow your wealth.",
      icon: "Zap",
      href: "/services/investment-advisory"
    }
  ];

  // Import existing services
  const importExistingServices = async () => {
    setSaving(true);
    setError('');
    setSuccess('');
    
    try {
      const migratedServices = existingServices.map((service, index) => ({
        id: Date.now().toString() + index,
        title: service.title,
        slug: service.href.replace('/services/', ''),
        shortDescription: service.description,
        fullDescription: `<h2>About ${service.title}</h2><p>${service.description}</p><h3>Key Features</h3><ul><li>Professional service delivery</li><li>Competitive pricing</li><li>Expert consultation</li><li>Timely execution</li></ul>`,
        icon: service.icon,
        category: service.title.includes('Guarantee') || service.title.includes('Securities') ? 'Financial Guarantees' : 
                 service.title.includes('Insurance') ? 'Insurance Solutions' :
                 service.title.includes('Finance') ? 'Trade Finance' : 'Advisory Services',
        tags: service.title.toLowerCase().split(' '),
        featuredImage: service.title.includes('Bid') ? '/BID SECURITY.png' :
                      service.title.includes('Performance') ? '/PERFOMANCE GUARANTEES.png' :
                      service.title.includes('Advance') ? '/ADVANCE PAYMENT GUARANTEES.png' :
                      service.title.includes('Insurance') ? '/INSURANCESOLUTIONS.png' :
                      service.title.includes('Trade') ? '/TRADE FINANCE.png' :
                      '/INVESTMENT ADVISORY.png',
        heroImage: '',
        price: 'Contact for Quote',
        duration: '1-30 days',
        features: [
          'Professional consultation',
          'Competitive rates',
          'Fast processing',
          'Expert guidance',
          'Reliable service'
        ],
        benefits: [
          'Enhanced credibility',
          'Risk mitigation',
          'Improved cash flow',
          'Professional support',
          'Peace of mind'
        ],
        process: [
          'Initial consultation',
          'Requirements assessment', 
          'Documentation preparation',
          'Processing and approval',
          'Service delivery'
        ],
        requirements: [
          'Valid business registration',
          'Financial statements',
          'Project documentation',
          'Identification documents',
          'Application forms'
        ],
        published: true,
        featured: index < 3, // Make first 3 featured
        seoTitle: `${service.title} - Blackbow Consult`,
        seoDescription: service.description,
        seoKeywords: service.title.toLowerCase().split(' ').join(', '),
        ctaText: 'Get a Quote',
        ctaLink: '/contacts'
      }));

      const updatedConfig = {
        ...servicesConfig,
        services: migratedServices
      };

      const response = await fetch('/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedConfig)
      });

      if (!response.ok) throw new Error('Failed to import services');

      setServicesConfig(updatedConfig);
      setSuccess(`Successfully imported ${migratedServices.length} services!`);
    } catch (err) {
      setError('Failed to import existing services: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  // Add new service
  const addService = () => {
    const newService = {
      id: Date.now().toString(),
      title: '',
      slug: '',
      shortDescription: '',
      fullDescription: '',
      icon: 'Briefcase',
      category: '',
      tags: [],
      featuredImage: '',
      heroImage: '',
      price: '',
      duration: '',
      features: [],
      benefits: [],
      process: [],
      requirements: [],
      published: false,
      featured: false,
      seoTitle: '',
      seoDescription: '',
      seoKeywords: '',
      ctaText: 'Get a Quote',
      ctaLink: '/contacts'
    };
    
    setEditingService(newService);
    setShowForm(true);
  };

  if (loading) return <div className="p-6 text-center">Loading services configuration...</div>;

  return (
    <div className="p-6">
      <FloatingAdminNav />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Services Management</h1>
            <p className="text-gray-600">Manage services and settings</p>
          </div>
          <div className="flex gap-4">
            {(!servicesConfig?.services || servicesConfig.services.length === 0) && (
              <button
                onClick={importExistingServices}
                disabled={saving}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                <FileText className="w-4 h-4" />
                {saving ? 'Importing...' : 'Import Existing Services'}
              </button>
            )}
            <button
              onClick={addService}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              New Service
            </button>
          </div>
        </div>

        {/* Status Messages */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
            {success}
          </div>
        )}

        {/* Services List */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Services ({servicesConfig?.services?.length || 0})</h2>
          
          {!servicesConfig?.services || servicesConfig.services.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Briefcase className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>No services found. Create your first service to get started.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesConfig.services.map((service) => (
                <div key={service.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Briefcase className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm">{service.title}</h3>
                        <p className="text-xs text-gray-500">{service.category}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {service.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Featured</span>
                      )}
                      {service.published ? (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Published</span>
                      ) : (
                        <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">Draft</span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.shortDescription}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1">
                        <Edit className="w-3 h-3" />
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-800 text-sm flex items-center gap-1">
                        <Trash2 className="w-3 h-3" />
                        Delete
                      </button>
                    </div>
                    {service.price && (
                      <span className="text-sm font-medium text-gray-900">{service.price}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesAdmin;
