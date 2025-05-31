import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FileUpload from '../components/common/FileUpload';
import { AlertCircle, CheckCircle, RefreshCw, FileCheck, Trash2, Download, FilterX, ExternalLink } from 'lucide-react';

const DataCleaner: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isAnalyzed, setIsAnalyzed] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  // Mock data quality issues
  const dataIssues = [
    { id: 1, type: 'Missing Values', count: 124, columns: ['age', 'income', 'occupation'], severity: 'high' },
    { id: 2, type: 'Outliers', count: 37, columns: ['income', 'expenses'], severity: 'medium' },
    { id: 3, type: 'Inconsistent Formats', count: 56, columns: ['date', 'phone', 'email'], severity: 'medium' },
    { id: 4, type: 'Duplicates', count: 12, columns: ['id', 'transaction_id'], severity: 'low' }
  ];

  const handleFilesSelected = (files: File[]) => {
    setUploadedFiles(files);
  };

  const handleAnalyze = () => {
    if (uploadedFiles.length === 0) return;
    
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setIsAnalyzed(true);
    }, 2000);
  };

  const handleFixAll = () => {
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false);
    }, 2000);
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Smart Data Cleaner</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Upload your dataset, detect issues, and apply one-click fixes to clean your data effortlessly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Upload Your Data</h2>
                
                <FileUpload
                  accept=".csv,.xlsx,.xls"
                  multiple={false}
                  maxSize={50}
                  onFilesSelected={handleFilesSelected}
                />
                
                <div className="mt-6">
                  <button
                    className="btn btn-primary w-full flex justify-center items-center"
                    onClick={handleAnalyze}
                    disabled={isProcessing || uploadedFiles.length === 0}
                  >
                    {isProcessing ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <FileCheck className="mr-2 h-4 w-4" />
                        Analyze Data
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Settings Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Cleaning Settings</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Missing Value Strategy</span>
                    </label>
                    <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <option value="drop">Drop rows with missing values</option>
                      <option value="mean">Replace with mean (numeric)</option>
                      <option value="median">Replace with median (numeric)</option>
                      <option value="mode">Replace with mode (categorical)</option>
                      <option value="custom">Custom value</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Outlier Detection</span>
                    </label>
                    <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <option value="iqr">IQR Method</option>
                      <option value="zscore">Z-Score Method</option>
                      <option value="dbscan">DBSCAN Clustering</option>
                      <option value="none">Don't detect outliers</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="duplicates"
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="duplicates" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      Remove duplicate rows
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="inconsistent"
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="inconsistent" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      Fix inconsistent formats
                    </label>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden h-full">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Data Quality Analysis</h2>
                  
                  {isAnalyzed && (
                    <button
                      className="btn btn-primary"
                      onClick={handleFixAll}
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <>
                          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Fix All Issues
                        </>
                      )}
                    </button>
                  )}
                </div>
                
                {!isAnalyzed ? (
                  <div className="flex flex-col items-center justify-center h-80">
                    <div className="text-center">
                      <FileCheck className="h-16 w-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No Data Analyzed Yet</h3>
                      <p className="text-gray-500 dark:text-gray-400 max-w-md">
                        Upload a dataset and click "Analyze Data" to identify quality issues and get automatic fixes.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div>
                    {/* Data Quality Score */}
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 mb-6 flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Data Quality Score</h3>
                        <p className="text-gray-500 dark:text-gray-400">Based on detected issues and their severity</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white text-2xl font-bold">
                          72%
                        </div>
                      </div>
                    </div>
                    
                    {/* Data Issues Table */}
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                              Issue Type
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                              Count
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                              Affected Columns
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                              Severity
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                          {dataIssues.map((issue) => (
                            <tr key={issue.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <AlertCircle className={`mr-2 h-4 w-4 ${
                                    issue.severity === 'high' 
                                      ? 'text-red-500' 
                                      : issue.severity === 'medium' 
                                        ? 'text-yellow-500' 
                                        : 'text-blue-500'
                                  }`} />
                                  <span className="text-gray-900 dark:text-white">{issue.type}</span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                                {issue.count}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                                <div className="flex flex-wrap gap-1">
                                  {issue.columns.map((column) => (
                                    <span 
                                      key={column} 
                                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                                    >
                                      {column}
                                    </span>
                                  ))}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  issue.severity === 'high' 
                                    ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' 
                                    : issue.severity === 'medium' 
                                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' 
                                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                                }`}>
                                  {issue.severity.charAt(0).toUpperCase() + issue.severity.slice(1)}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-3">
                                  <FilterX className="h-4 w-4" />
                                </button>
                                <button className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300">
                                  <CheckCircle className="h-4 w-4" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-end">
                      <button className="btn btn-outline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Preview Data
                      </button>
                      <button className="btn btn-outline flex items-center">
                        <Download className="h-4 w-4 mr-2" />
                        Export Clean Data
                      </button>
                      <button className="btn btn-primary flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Apply & Save
                      </button>
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

export default DataCleaner;