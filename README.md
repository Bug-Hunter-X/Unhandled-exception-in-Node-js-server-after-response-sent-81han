# Unhandled Exception in Node.js Server After Response Sent

This repository demonstrates an uncommon bug in Node.js where an exception is thrown after the response headers have been sent to the client.  The bug is subtle because the exception occurs *after* the initial response has started, which can lead to unexpected behavior and missed error handling.

## The Bug

The `bug.js` file contains a Node.js HTTP server that simulates this issue.  It throws an error after writing the initial response data. The server should handle this error to prevent crashing and give appropriate feedback to the client.

## The Solution

The `bugSolution.js` file shows how to correctly handle this situation using error handling. The solution involves checking for the error in the callback from the response's end method or use a dedicated error handling method for the response object.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`.
4. Open your browser and visit `http://localhost:3000/error`. Observe the server's output.
5. Run `node bugSolution.js` and repeat the request. Observe the differences in behavior and error handling.

This example highlights the importance of robust error handling in Node.js applications, especially in asynchronous operations.