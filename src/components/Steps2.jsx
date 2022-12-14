import React from 'react'

const Steps2 = () => {
  return (

<div className='max-w-[1240px] mx-auto '>

<ol class="relative border-l border-gray-200 dark:border-gray-700 ml-5 mb-20">                  
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">First Step</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Node.js and NPM Instalation</h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">NPM is a package manager for Node. js packages, or modules if you like.</p>
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Second Step</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Code!</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">This is the most challenging part!, create components, add APIs and build project</p>
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Third Step</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Upload Project to Github</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Create Github repository and add all folders</p>
        <a href="https://github.com/cigarettesafterher" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">See Github projects! <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>

    </li>

    <li class="ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Last Step</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Deploy to Vercel</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Upload repository to a hosting site</p>

    </li>
</ol>

</div>

  )
}

export default Steps2