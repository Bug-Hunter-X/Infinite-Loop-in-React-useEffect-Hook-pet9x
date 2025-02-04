# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by the improper use of the `useEffect` hook.

The `bug.js` file contains the faulty component that triggers the infinite loop.  The `bugSolution.js` shows the corrected version.

## Problem

The original code attempts to increment the state variable `count` within the `useEffect` hook without specifying any dependencies. This leads to an infinite loop because each state update triggers a re-render, which in turn triggers the `useEffect` again, leading to an endless chain of updates.

## Solution

The corrected code adds a dependency array to the `useEffect` hook.  The dependency array should list all state variables that the `useEffect` function reads.  In this example, the function reads `count`, so it needs to be listed as a dependency.  Adding the dependency correctly prevents the infinite loop.

This example highlights the importance of understanding the dependency array in React's `useEffect` hook to avoid performance issues and unexpected behavior.