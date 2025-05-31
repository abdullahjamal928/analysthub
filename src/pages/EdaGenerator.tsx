import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FileUpload from '../components/common/FileUpload';
import { BarChart2, PieChart, RefreshCw, FileUp, Download, Copy, ChevronDown, ChevronUp, Filter, Settings } from 'lucide-react';

const EdaGenerator: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [activeTab, setActiveTab] = useState('summary');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'data-overview': true,
    'variable-distributions': true,
    'correlations': true,
    'outliers': true
  });

  const handleFilesSelected = (files: File[]) => {
    setUploadedFiles(files);
  };

  const handleGenerate = () => {
    if (uploadedFiles.length === 0) return;
    
    setIsGenerating(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setIsGenerating(false);
      setIsGenerated(true);
    }, 2000);
  };

  const toggleSection = (section: string) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">One-Click EDA Generator</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Generate comprehensive exploratory data analysis with visualizations, summary statistics, and insights.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Data Upload</h2>
                
                <FileUpload
                  accept=".csv,.xlsx,.xls"
                  multiple={false}
                  maxSize={50}
                  onFilesSelected={handleFilesSelected}
                />
                
                <div className="mt-6">
                  <button
                    className="btn btn-primary w-full flex justify-center items-center"
                    onClick={handleGenerate}
                    disabled={isGenerating || uploadedFiles.length === 0}
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <BarChart2 className="mr-2 h-4 w-4" />
                        Generate EDA
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
            
            {/* EDA Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Analysis Options</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Include Sections</h3>
                    <div className="space-y-2">
                      {[
                        { id: 'summary', label: 'Data Summary' },
                        { id: 'distributions', label: 'Variable Distributions' },
                        { id: 'correlations', label: 'Correlation Analysis' },
                        { id: 'outliers', label: 'Outlier Detection' },
                        { id: 'missing', label: 'Missing Value Analysis' }
                      ].map((option) => (
                        <div key={option.id} className="flex items-center">
                          <input
                            id={option.id}
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label htmlFor={option.id} className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Visualization Style</h3>
                    <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <option value="default">Default</option>
                      <option value="minimal">Minimal</option>
                      <option value="detailed">Detailed</option>
                      <option value="presentation">Presentation Ready</option>
                    </select>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Export Options</h3>
                    <div className="space-y-2">
                      {[
                        { id: 'pdf', label: 'PDF Report' },
                        { id: 'html', label: 'Interactive HTML' },
                        { id: 'notebook', label: 'Jupyter Notebook' },
                        { id: 'images', label: 'Chart Images' }
                      ].map((option) => (
                        <div key={option.id} className="flex items-center">
                          <input
                            id={`export-${option.id}`}
                            type="checkbox"
                            defaultChecked={option.id === 'pdf' || option.id === 'html'}
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label htmlFor={`export-${option.id}`} className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden h-full">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">EDA Report</h2>
                    {isGenerated && uploadedFiles.length > 0 && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Analysis of {uploadedFiles[0].name}
                      </p>
                    )}
                  </div>
                  
                  {isGenerated && (
                    <div className="flex space-x-2">
                      <button className="btn btn-outline">
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </button>
                      <button className="btn btn-primary">
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </button>
                    </div>
                  )}
                </div>
                
                {!isGenerated ? (
                  <div className="flex flex-col items-center justify-center h-96">
                    <div className="text-center">
                      <BarChart2 className="h-16 w-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No Analysis Generated Yet</h3>
                      <p className="text-gray-500 dark:text-gray-400 max-w-md">
                        Upload a dataset and click "Generate EDA" to create a comprehensive exploratory data analysis.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div>
                    {/* Tabs */}
                    <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
                      <nav className="flex space-x-8">
                        {[
                          { id: 'summary', label: 'Summary' },
                          { id: 'visualizations', label: 'Visualizations' },
                          { id: 'insights', label: 'Key Insights' },
                          { id: 'recommendations', label: 'Recommendations' }
                        ].map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`py-3 px-1 border-b-2 text-sm font-medium ${
                              activeTab === tab.id
                                ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600'
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </nav>
                    </div>
                    
                    {/* Tab Content */}
                    <div className="overflow-y-auto max-h-[calc(100vh-280px)] pr-2">
                      {activeTab === 'summary' && (
                        <div className="space-y-6">
                          {/* Data Overview Section */}
                          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                            <div 
                              className="bg-gray-50 dark:bg-gray-800 px-4 py-3 flex justify-between items-center cursor-pointer"
                              onClick={() => toggleSection('data-overview')}
                            >
                              <h3 className="text-base font-medium text-gray-900 dark:text-white">Data Overview</h3>
                              <button className="text-gray-500 dark:text-gray-400">
                                {expandedSections['data-overview'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                              </button>
                            </div>
                            
                            {expandedSections['data-overview'] && (
                              <div className="p-4">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                  {[
                                    { label: 'Rows', value: '12,482' },
                                    { label: 'Columns', value: '24' },
                                    { label: 'Missing Values', value: '3.2%' },
                                    { label: 'Duplicates', value: '45 rows' }
                                  ].map((stat, index) => (
                                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                                      <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                                      <p className="text-xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                                    </div>
                                  ))}
                                </div>
                                
                                <div className="overflow-x-auto">
                                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                      <tr>
                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                          Column
                                        </th>
                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                          Type
                                        </th>
                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                          Non-Null
                                        </th>
                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                          Unique Values
                                        </th>
                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                          Memory Usage
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                      {[
                                        { column: 'id', type: 'int64', nonNull: '12,482 (100%)', unique: '12,482', memory: '99.9 KB' },
                                        { column: 'name', type: 'object', nonNull: '12,482 (100%)', unique: '10,345', memory: '997.6 KB' },
                                        { column: 'age', type: 'float64', nonNull: '12,105 (97%)', unique: '75', memory: '99.9 KB' },
                                        { column: 'income', type: 'float64', nonNull: '11,984 (96%)', unique: '1,245', memory: '99.9 KB' },
                                        { column: 'gender', type: 'object', nonNull: '12,482 (100%)', unique: '3', memory: '99.9 KB' }
                                      ].map((row, index) => (
                                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                          <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                            {row.column}
                                          </td>
                                          <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                                              {row.type}
                                            </span>
                                          </td>
                                          <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            {row.nonNull}
                                          </td>
                                          <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            {row.unique}
                                          </td>
                                          <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            {row.memory}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          {/* Variable Distributions */}
                          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                            <div 
                              className="bg-gray-50 dark:bg-gray-800 px-4 py-3 flex justify-between items-center cursor-pointer"
                              onClick={() => toggleSection('variable-distributions')}
                            >
                              <h3 className="text-base font-medium text-gray-900 dark:text-white">Variable Distributions</h3>
                              <button className="text-gray-500 dark:text-gray-400">
                                {expandedSections['variable-distributions'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                              </button>
                            </div>
                            
                            {expandedSections['variable-distributions'] && (
                              <div className="p-4">
                                <div className="flex mb-4 overflow-x-auto pb-2">
                                  <button className="flex items-center px-3 py-1.5 text-sm font-medium rounded-lg bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 mr-2">
                                    All Variables
                                  </button>
                                  <button className="flex items-center px-3 py-1.5 text-sm font-medium rounded-lg bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 mr-2">
                                    Numeric
                                  </button>
                                  <button className="flex items-center px-3 py-1.5 text-sm font-medium rounded-lg bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 mr-2">
                                    Categorical
                                  </button>
                                  <button className="flex items-center px-3 py-1.5 text-sm font-medium rounded-lg bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 mr-2">
                                    Temporal
                                  </button>
                                  <button className="flex items-center px-3 py-1.5 text-sm font-medium rounded-lg bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">
                                    <Filter size={14} className="mr-1" /> 
                                    Filter
                                  </button>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  {/* Age Distribution */}
                                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                                    <div className="flex justify-between items-center mb-2">
                                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">Age Distribution</h4>
                                      <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                                        <Settings size={16} />
                                      </button>
                                    </div>
                                    <div className="aspect-[4/3] bg-white dark:bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
                                      <img 
                                        src="https://images.pexels.com/photos/8370271/pexels-photo-8370271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                        alt="Age Distribution Chart" 
                                        className="w-full h-auto"
                                      />
                                    </div>
                                    <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                                      <div className="text-center">
                                        <p className="text-gray-500 dark:text-gray-400">Mean</p>
                                        <p className="font-medium text-gray-900 dark:text-white">38.5</p>
                                      </div>
                                      <div className="text-center">
                                        <p className="text-gray-500 dark:text-gray-400">Median</p>
                                        <p className="font-medium text-gray-900 dark:text-white">36.0</p>
                                      </div>
                                      <div className="text-center">
                                        <p className="text-gray-500 dark:text-gray-400">Std Dev</p>
                                        <p className="font-medium text-gray-900 dark:text-white">12.7</p>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {/* Income Distribution */}
                                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                                    <div className="flex justify-between items-center mb-2">
                                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">Income Distribution</h4>
                                      <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                                        <Settings size={16} />
                                      </button>
                                    </div>
                                    <div className="aspect-[4/3] bg-white dark:bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
                                      <img 
                                        src="https://images.pexels.com/photos/7681514/pexels-photo-7681514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                        alt="Income Distribution Chart" 
                                        className="w-full h-auto"
                                      />
                                    </div>
                                    <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                                      <div className="text-center">
                                        <p className="text-gray-500 dark:text-gray-400">Mean</p>
                                        <p className="font-medium text-gray-900 dark:text-white">$72,450</p>
                                      </div>
                                      <div className="text-center">
                                        <p className="text-gray-500 dark:text-gray-400">Median</p>
                                        <p className="font-medium text-gray-900 dark:text-white">$68,200</p>
                                      </div>
                                      <div className="text-center">
                                        <p className="text-gray-500 dark:text-gray-400">Std Dev</p>
                                        <p className="font-medium text-gray-900 dark:text-white">$24,300</p>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {/* Gender Distribution */}
                                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                                    <div className="flex justify-between items-center mb-2">
                                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">Gender Distribution</h4>
                                      <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                                        <Settings size={16} />
                                      </button>
                                    </div>
                                    <div className="aspect-[4/3] bg-white dark:bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
                                      <img 
                                        src="https://images.pexels.com/photos/669621/pexels-photo-669621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                        alt="Gender Distribution Chart" 
                                        className="w-full h-auto"
                                      />
                                    </div>
                                    <div className="mt-2 space-y-1 text-xs">
                                      <div className="flex justify-between">
                                        <span className="text-gray-500 dark:text-gray-400">Female</span>
                                        <span className="font-medium text-gray-900 dark:text-white">52.4%</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-500 dark:text-gray-400">Male</span>
                                        <span className="font-medium text-gray-900 dark:text-white">47.1%</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-500 dark:text-gray-400">Other</span>
                                        <span className="font-medium text-gray-900 dark:text-white">0.5%</span>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {/* Occupation Distribution */}
                                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                                    <div className="flex justify-between items-center mb-2">
                                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">Occupation Distribution</h4>
                                      <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                                        <Settings size={16} />
                                      </button>
                                    </div>
                                    <div className="aspect-[4/3] bg-white dark:bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
                                      <img 
                                        src="https://images.pexels.com/photos/7567429/pexels-photo-7567429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                        alt="Occupation Distribution Chart" 
                                        className="w-full h-auto"
                                      />
                                    </div>
                                    <div className="mt-2 space-y-1 text-xs">
                                      <div className="flex justify-between">
                                        <span className="text-gray-500 dark:text-gray-400">Top category</span>
                                        <span className="font-medium text-gray-900 dark:text-white">Professional (24.2%)</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-500 dark:text-gray-400">Categories</span>
                                        <span className="font-medium text-gray-900 dark:text-white">12 unique</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          {/* Correlations */}
                          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                            <div 
                              className="bg-gray-50 dark:bg-gray-800 px-4 py-3 flex justify-between items-center cursor-pointer"
                              onClick={() => toggleSection('correlations')}
                            >
                              <h3 className="text-base font-medium text-gray-900 dark:text-white">Correlation Analysis</h3>
                              <button className="text-gray-500 dark:text-gray-400">
                                {expandedSections['correlations'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                              </button>
                            </div>
                            
                            {expandedSections['correlations'] && (
                              <div className="p-4">
                                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
                                  <div className="flex justify-between items-center mb-3">
                                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Correlation Heatmap</h4>
                                    <div className="flex space-x-2">
                                      <select className="text-xs rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white py-1">
                                        <option>Pearson</option>
                                        <option>Spearman</option>
                                        <option>Kendall</option>
                                      </select>
                                      <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                                        <Settings size={16} />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="aspect-[16/9] bg-white dark:bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
                                    <img 
                                      src="https://images.pexels.com/photos/8370754/pexels-photo-8370754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                      alt="Correlation Heatmap" 
                                      className="w-full h-auto"
                                    />
                                  </div>
                                </div>
                                
                                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Top Correlations</h4>
                                <div className="overflow-x-auto">
                                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                      <tr>
                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                          Variable 1
                                        </th>
                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                          Variable 2
                                        </th>
                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                          Correlation
                                        </th>
                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                          Strength
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                      {[
                                        { var1: 'income', var2: 'education_years', corr: 0.78, strength: 'Strong Positive' },
                                        { var1: 'age', var2: 'income', corr: 0.45, strength: 'Moderate Positive' },
                                        { var1: 'expenses', var2: 'income', corr: 0.72, strength: 'Strong Positive' },
                                        { var1: 'credit_score', var2: 'debt', corr: -0.56, strength: 'Moderate Negative' },
                                        { var1: 'savings', var2: 'risk_tolerance', corr: 0.38, strength: 'Moderate Positive' }
                                      ].map((row, index) => (
                                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                          <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                            {row.var1}
                                          </td>
                                          <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            {row.var2}
                                          </td>
                                          <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            {row.corr.toFixed(2)}
                                          </td>
                                          <td className="px-3 py-2 whitespace-nowrap text-sm">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                              row.corr > 0.7 
                                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                                                : row.corr > 0.4 
                                                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' 
                                                  : row.corr < -0.4 
                                                    ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
                                                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                                            }`}>
                                              {row.strength}
                                            </span>
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          {/* Outliers */}
                          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                            <div 
                              className="bg-gray-50 dark:bg-gray-800 px-4 py-3 flex justify-between items-center cursor-pointer"
                              onClick={() => toggleSection('outliers')}
                            >
                              <h3 className="text-base font-medium text-gray-900 dark:text-white">Outlier Detection</h3>
                              <button className="text-gray-500 dark:text-gray-400">
                                {expandedSections['outliers'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                              </button>
                            </div>
                            
                            {expandedSections['outliers'] && (
                              <div className="p-4">
                                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
                                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Outlier Summary</h4>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                    Detected 78 potential outliers across 5 numeric variables using the IQR method.
                                  </p>
                                  
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="aspect-[4/3] bg-white dark:bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
                                      <img 
                                        src="https://images.pexels.com/photos/7567556/pexels-photo-7567556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                        alt="Outlier Box Plot" 
                                        className="w-full h-auto"
                                      />
                                    </div>
                                    
                                    <div>
                                      <h5 className="text-xs font-medium text-gray-900 dark:text-white mb-2">Outliers by Variable</h5>
                                      <div className="space-y-2">
                                        {[
                                          { variable: 'income', count: 32, percent: 0.26 },
                                          { variable: 'age', count: 12, percent: 0.10 },
                                          { variable: 'expenses', count: 18, percent: 0.14 },
                                          { variable: 'debt', count: 9, percent: 0.07 },
                                          { variable: 'savings', count: 7, percent: 0.06 }
                                        ].map((item, index) => (
                                          <div key={index} className="flex items-center">
                                            <div className="w-24 flex-shrink-0">
                                              <span className="text-xs text-gray-700 dark:text-gray-300">{item.variable}</span>
                                            </div>
                                            <div className="flex-grow h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                              <div 
                                                className="h-full bg-blue-500 dark:bg-blue-400 rounded-full" 
                                                style={{ width: `${item.percent * 100}%` }}
                                              ></div>
                                            </div>
                                            <div className="w-12 flex-shrink-0 text-right">
                                              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{item.count}</span>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 'visualizations' && (
                        <div className="text-center p-8">
                          <PieChart className="h-16 w-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Visualization Tab</h3>
                          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                            This tab would display interactive visualizations and charts generated from your data.
                          </p>
                        </div>
                      )}
                      
                      {activeTab === 'insights' && (
                        <div className="text-center p-8">
                          <Lightbulb className="h-16 w-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Key Insights Tab</h3>
                          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                            This tab would show AI-generated insights and patterns discovered in your data.
                          </p>
                        </div>
                      )}
                      
                      {activeTab === 'recommendations' && (
                        <div className="text-center p-8">
                          <ListChecks className="h-16 w-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Recommendations Tab</h3>
                          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                            This tab would provide suggestions for further analysis and data improvements.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

import { Lightbulb, ListChecks } from 'lucide-react';
export default EdaGenerator;