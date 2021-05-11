import { CheckIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

const tiers = [
  {
    name: 'Personal',
    href: '#',
    priceMonthly: 0,
    description: 'Free for personal projects',
    features: [
      '10 000 API Requests a Month',
      'Adaptive Threshhold Preprocessing',
      'Receipt OCR Template',
      'Analytics Dashboard',
      'Free developer support (helpful advice not guaranteed)',
    ],
    button: 'Sign Up',
    route: '/signup'
  },
  {
    name: 'Enterprise',
    href: '#',
    priceMonthly: "x",
    description: 'Covers server + development fees',
    features: [
      'Unlimited API Requests a Month',
      'Custom Preprocessing',
      'Custom OCR Templates',
      'Analytics dashboard + custom fields',
      'Free developer support (helpful advice not guaranteed)',
    ],
    button: 'Contact Me',
    route: '/contact'
  },
]

export default function Example() {
  return (
    <div className="bg-green-900">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">Pricing</h2>
            <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Low prices compared to competitors, low confidence too though lol
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-green-900" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {tiers.map((tier) => (
                <div key={tier.name} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-gray-100 text-gray-800"
                        id="tier-standard"
                      >
                        {tier.name}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                      {tier.priceMonthly}
                      <span className="ml-1 text-2xl font-medium text-gray-500">/mo</span>
                    </div>
                    <p className="mt-5 text-lg text-gray-500">{tier.description}</p>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                    <ul className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-base text-gray-700">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-md shadow">
                      <Link
                        to={tier.route}
                        href={tier.href}
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-800 hover:bg-green-900"
                        aria-describedby="tier-standard"
                      >
                        {tier.button}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    
      </div>
    </div>
  )
}