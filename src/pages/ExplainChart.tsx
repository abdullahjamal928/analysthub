import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FileUpload from '../components/common/FileUpload';
import { Lightbulb, RefreshCw, FileImage, Copy, Download, ThumbsUp, ThumbsDown, Share2, Zap, MessageSquare } from 'lucide-react';

const ExplainChart: React.FC = () => {
  const [isExplaining, setIsExplaining] = useState(false);
  const [isExplained, setIsExplained] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [feedback, setFeedback] = useState<'none' | 'positive' | 'negative'>('none');

  const handleFilesSelected = (files: File[]) => {
    setUploadedFiles(files);
    setIsExplained(false);
    setFeedback('none');
  };

  const handleExplain = () => {
    if (uploadedFiles.length === 0) return;
    
    setIsExplaining(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setIsExplaining(false);
      setIsExplained(true);
    }, 2000);
  };

  const handleFeedback = (type: 'positive' | 'negative') => {
    setFeedback(type);
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Explain This Chart</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Upload any chart or visualization and get a plain-English explanation of insights, trends, and anomalies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Upload Your Chart</h2>
                
                <FileUpload
                  accept=".png,.jpg,.jpeg,.gif,.svg,.webp"
                  multiple={false}
                  maxSize={10}
                  onFilesSelected={handleFilesSelected}
                />
                
                <div className="mt-6">
                  <button
                    className="btn btn-primary w-full flex justify-center items-center"
                    onClick={handleExplain}
                    disabled={isExplaining || uploadedFiles.length === 0}
                  >
                    {isExplaining ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing Chart...
                      </>
                    ) : (
                      <>
                        <Lightbulb className="mr-2 h-4 w-4" />
                        Explain This Chart
                      </>
                    )}
                  </button>
                </div>
                
                {uploadedFiles.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-base font-medium mb-4 text-gray-900 dark:text-white">Preview</h3>
                    <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center border border-gray-200 dark:border-gray-600">
                      {/* This would typically show a preview of the uploaded image */}
                      <FileImage className="h-12 w-12 text-gray-400 dark:text-gray-500" />
                    </div>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                      Image preview would appear here
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Examples Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Example Charts</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Don't have a chart handy? Try one of these examples:
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <button 
                      key={index}
                      className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                    >
                      <img 
                        src={`https://placehold.co/300x300?text=Chart+${index}`} 
                        alt={`Example chart ${index}`} 
                        className="w-full h-auto"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Explanation Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden h-full">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Chart Explanation</h2>
                  
                  {isExplained && (
                    <div className="flex space-x-2">
                      <button className="btn btn-outline">
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </button>
                      <button className="btn btn-primary">
                        <Download className="h-4 w-4 mr-2" />
                        Save
                      </button>
                    </div>
                  )}
                </div>
                
                {!isExplained ? (
                  <div className="flex flex-col items-center justify-center h-96">
                    <div className="text-center">
                      <Lightbulb className="h-16 w-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No Chart Explained Yet</h3>
                      <p className="text-gray-500 dark:text-gray-400 max-w-md">
                        Upload a chart and click "Explain This Chart" to get an AI-powered explanation of the data insights.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div>
                    {/* Chart Title */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Sales Performance by Region (Q1-Q4 2024)
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Bar chart with quarterly data across 4 regions
                      </p>
                    </div>
                    
                    {/* Main Explanation */}
                    <div className="bg-gray-50 dark:bg-gray-900/30 rounded-lg p-5 mb-6">
                      <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                        Key Insights
                      </h4>
                      
                      <div className="prose prose-sm dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                        <p>
                          This bar chart shows sales performance across four regions (North, South, East, West) over four quarters in 2024. The data reveals several important patterns:
                        </p>
                        
                        <ul className="mt-3 space-y-2">
                          <li>
                            <strong>Western region dominance:</strong> The Western region consistently outperformed other regions across all quarters, with particularly strong performance in Q3 ($1.2M in sales).
                          </li>
                          <li>
                            <strong>Seasonal patterns:</strong> All regions show a significant sales increase in Q3, likely indicating a seasonal effect or successful Q3 promotion.
                          </li>
                          <li>
                            <strong>Southern region growth:</strong> The Southern region shows the most consistent quarter-over-quarter growth, increasing from $450K in Q1 to $920K in Q4 (104% growth).
                          </li>
                          <li>
                            <strong>Eastern region volatility:</strong> The Eastern region shows the highest volatility with a sharp 43% decline between Q3 and Q4.
                          </li>
                        </ul>
                        
                        <p className="mt-3">
                          Overall, total sales across all regions grew by 32% from Q1 to Q4, with Q3 being the strongest performing quarter. The Western and Southern regions were the main drivers of growth, while the Northern region remained relatively flat throughout the year.
                        </p>
                      </div>
                    </div>
                    
                    {/* Additional Analysis */}
                    <div className="mb-6 space-y-4">
                      <div>
                        <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                          <MessageSquare className="h-5 w-5 text-blue-500 mr-2" />
                          Recommendations
                        </h4>
                        
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 dark:bg-blue-900/50 dark:text-blue-300 h-5 w-5 text-xs font-medium mr-2 mt-0.5">1</span>
                            <span>Investigate the factors behind the Western region's consistent success and apply those learnings to other regions.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 dark:bg-blue-900/50 dark:text-blue-300 h-5 w-5 text-xs font-medium mr-2 mt-0.5">2</span>
                            <span>Explore the cause of the Eastern region's Q4 decline to address potential issues.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 dark:bg-blue-900/50 dark:text-blue-300 h-5 w-5 text-xs font-medium mr-2 mt-0.5">3</span>
                            <span>Prepare for the seasonal Q3 spike across all regions in future planning to maximize potential revenue.</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                          <FileImage className="h-5 w-5 text-purple-500 mr-2" />
                          Alternative Visualizations
                        </h4>
                        
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          This data might be better visualized as:
                        </p>
                        
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200">
                            Line chart (to emphasize trends)
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200">
                            Stacked bar (for total quarterly sales)
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200">
                            Heat map (to highlight relative performance)
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Statistical Summary */}
                    <div className="bg-gray-50 dark:bg-gray-900/30 rounded-lg p-4 mb-6">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Statistical Summary</h4>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                          <p className="text-gray-500 dark:text-gray-400 text-xs">Total Sales</p>
                          <p className="text-lg font-semibold text-gray-900 dark:text-white">$12.4M</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                          <p className="text-gray-500 dark:text-gray-400 text-xs">Peak Quarter</p>
                          <p className="text-lg font-semibold text-gray-900 dark:text-white">Q3 ($3.8M)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                          <p className="text-gray-500 dark:text-gray-400 text-xs">Top Region</p>
                          <p className="text-lg font-semibold text-gray-900 dark:text-white">West (34%)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                          <p className="text-gray-500 dark:text-gray-400 text-xs">YoY Growth</p>
                          <p className="text-lg font-semibold text-green-600 dark:text-green-400">+18.3%</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Feedback Section */}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-6">
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Was this explanation helpful?</p>
                        
                        <div className="flex items-center space-x-2">
                          <button 
                            className={`p-1.5 rounded-full ${
                              feedback === 'positive' 
                                ? 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400' 
                                : 'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300'
                            }`}
                            onClick={() => handleFeedback('positive')}
                            disabled={feedback !== 'none'}
                          >
                            <ThumbsUp size={18} />
                          </button>
                          
                          <button 
                            className={`p-1.5 rounded-full ${
                              feedback === 'negative' 
                                ? 'bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400' 
                                : 'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300'
                            }`}
                            onClick={() => handleFeedback('negative')}
                            disabled={feedback !== 'none'}
                          >
                            <ThumbsDown size={18} />
                          </button>
                          
                          <button className="p-1.5 rounded-full text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300">
                            <Share2 size={18} />
                          </button>
                        </div>
                      </div>
                      
                      {feedback !== 'none' && (
                        <div className="mt-3">
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {feedback === 'positive' 
                              ? 'Thanks for your feedback! We\'ll keep improving our explanations.' 
                              : 'Thanks for your feedback. What could we improve about this explanation?'}
                          </p>
                          
                          {feedback === 'negative' && (
                            <textarea 
                              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
                              placeholder="Please tell us how we can improve this explanation..."
                              rows={3}
                            ></textarea>
                          )}
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

export default ExplainChart;