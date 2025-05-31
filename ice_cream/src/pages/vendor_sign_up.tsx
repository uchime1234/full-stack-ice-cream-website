// src/App.tsx
import { ContactForm } from '../components/ContactForm'
import "../pages/vendorsign.css"
function Vendorsign() {







  
  return (
    <div className="min-h-screen w-full bg-pink-400 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left Panel - Green Section */}
          <div className="bg-pink-300 p-8 md:p-12 text-white flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 10H10V24H24V10Z" fill="white"/>
                  <path d="M30 4L4 4L4 30L30 30L30 4Z" stroke="white" strokeWidth="2"/>
                  <path d="M40 8L40 24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M46 16L58 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M46 8L58 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M46 24L58 24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M64 8V24L76 16L64 8Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M82 8V24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M82 8C82 8 86 8 90 8C94 8 98 12 98 16C98 20 94 24 90 24C86 24 82 24 82 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-sm font-medium mt-1">on purpose events</p>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-semibold mt-8">
                Vendor sign in page
              </h1>
              
              <p className="text-sm md:text-base opacity-90 mt-4">
                Become an icecream vendor on our platform and churn up a storm of new clients! Whether you specialize in creamy gelato, vibrant sorbets or festive popsicles, we will help you show case your frosty delights to eager customers     
              </p>

           <p className='text-3xl md:text-4xl font-semibold mt-8 relative top-[90px]'>
            Already have an account

           </p>
 
           <a className='relative top-[100px]' href="">Login in</a>
         

            </div>
            
            <div className="mt-12 border border-emerald-700 rounded-xl p-6 bg-pink-400">
              <p className="text-sm font-medium">
                Join our platform and scoop up new opportunites as an icecream vendor!
              </p>
              <p className="text-xs mt-3 opacity-80">
                Make every occation cooler with your delicious flavours
              </p>
            </div>
          </div>
          
          {/* Right Panel - Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Vendorsign