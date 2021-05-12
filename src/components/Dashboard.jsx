/* This example requires Tailwind CSS v2.0+ */
import { LockClosedIcon } from '@heroicons/react/solid'
import { useHistory, Link } from "react-router-dom";
import {useState} from 'react'
import axios from 'axios'
const people = [
    { name: '/api/receiptocr', title: '{\'receipt\': \'receipt.jpg\'}', email: '{\'amount\': \'10.12\'}' },
    // More people...
  ]

  export default function Dashboard(props) {
    const history = useHistory()
    const user = props.user
    console.log(props)
    if(props.user.calls == -1){
        axios.get("https://api.teahouseapps.app/api/user").then(res => {
            props.setUserModel(res.data.user)
            history.push('/dashboard')
          })
    }

    const onLogOut = ()=>{
        localStorage.removeItem('token');
        props.setUserModel(
            {
                email: "",
                calls: -1,
                key: ""
            }
        )
        history.push('/')
    }

    const stats = [
        { name: 'Email', stat: user.email.toString() },
        { name: 'API Calls', stat: user.calls.toString() },
        { name: 'API Key', stat: user.key.toString() },
      ]
    return (
        <div>
        <div className="shadow">
          <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">

              <button
                onClick={onLogOut}
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-700 hover:bg-green-900"
              >
                Log Out
              </button>
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a className="underline" href="https://github.com/williamxyshi/receipt-ocr-rest-api">
                <span className="sr-only">Workflow</span>
                contribute on GitHub
      
              </a>
            </div>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            </div>
                  

          </div>
    </div>
      <div className="p-11">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Dashboard</h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-lg font-medium text-gray-500 truncate">{item.name}</dt>
              <dd className="mt-1 text-md font-semibold text-gray-900">{item.stat}</dd>
            </div>
          ))}
        </dl>
      </div>

   
      <div className="flex flex-col p-11">
      <p className="text-sm text-gray-900 sm:text-xl md:mt-5 md:max-w-3xl">
              Append all routes to https://api.teahouseapps.app
            </p>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Route
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Request
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Response
                  </th>

                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.email}</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>

    )
  }
  