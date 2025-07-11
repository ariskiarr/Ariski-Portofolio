'use client'

import LoadingLottie from './LoadingLottie'

interface LoadingPageProps {
  message?: string
}

export default function LoadingPage({ message = "Loading..." }: LoadingPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 dark:from-black dark:to-gray-900">
      <div className="text-center">
        <div className="mb-6">
          <LoadingLottie />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
          {message}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Please wait while we prepare everything for you
        </p>
      </div>
    </div>
  )
}
