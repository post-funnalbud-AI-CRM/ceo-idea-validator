"use client"

import * as React from "react"
import Script from "next/script"
import { Globe } from "lucide-react"

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export function LanguageSelector() {
  React.useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,sv', // English and Swedish
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };
  }, []);

  return (
    <div className="relative group z-50">
        {/* Custom Icon Layer */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <Globe className="w-4 h-4 text-gray-500 group-hover:text-purple-600 transition-colors" />
        </div>
        
        <Script
            src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
            strategy="afterInteractive"
        />
        
        <div id="google_translate_element" className="overflow-hidden rounded-lg" />
        
        <style jsx global>{`
            /* HIDE GOOGLE BANNER AND TOP BAR */
            .goog-te-banner-frame {
                display: none !important;
            }
            
            body {
                top: 0px !important;
                position: static !important;
            }

            /* Fix for the shifting content */
            html, body {
                margin-top: 0px !important;
            }

            /* Hide the Google Translate tooltip */
            .goog-tooltip {
                display: none !important;
            }
            .goog-tooltip:hover {
                display: none !important;
            }
            .goog-text-highlight {
                background-color: transparent !important;
                border: none !important; 
                box-shadow: none !important;
            }

            /* Hide "Original text" popup */
            #goog-gt-tt {
                display: none !important;
                visibility: hidden !important;
            }

            /* CUSTOMIZE THE WIDGET BUTTON */
            #google_translate_element .goog-te-gadget-simple {
                background-color: #fff !important;
                border: 1px solid #e5e7eb !important;
                padding: 8px 12px 8px 36px !important; /* Left padding for the icon */
                border-radius: 8px !important;
                font-size: 14px !important;
                font-weight: 500 !important;
                font-family: inherit !important;
                color: #374151 !important;
                cursor: pointer !important;
                transition: all 0.2s ease !important;
                height: 40px !important;
                display: flex !important;
                align-items: center !important;
                box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05) !important;
            }

            #google_translate_element .goog-te-gadget-simple:hover {
                border-color: #d8b4fe !important; /* purple-300 */
                background-color: #faf5ff !important; /* purple-50 */
                color: #7e22ce !important; /* purple-700 */
            }

            /* Hide Google Icon */
            .goog-te-gadget-icon {
                display: none !important;
            }

            /* Style Text */
            .goog-te-menu-value {
                color: inherit !important;
                display: flex !important;
                align-items: center !important;
                margin: 0 !important;
            }
            
            .goog-te-menu-value span:first-child {
                /* Language Name */
                padding-right: 4px !important;
            }

            /* Hide the vertical separator pipe */
            .goog-te-menu-value span:nth-child(3) {
                display: none !important;
            }

            /* Style the arrow (it's often an image or text) */
            .goog-te-menu-value span:nth-child(5) {
                /* Google's arrow is usually an image, let's filter it or replace it if we could, 
                   but usually styling the container is enough. 
                   We can try to hide it and use a pseudo element if needed, 
                   but let's see if it looks okay first. */
                color: inherit !important;
                font-size: 10px !important;
                opacity: 0.5 !important;
            }
            
            /* Hide "Powered by Google" tooltip/text inside */
            .goog-te-gadget-simple > span > a {
                 display: none !important;
            }

            /* Tooltip reset */
            .goog-tooltip {
                display: none !important;
            }
            .goog-tooltip:hover {
                display: none !important;
            }
        `}</style>
    </div>
  )
}
