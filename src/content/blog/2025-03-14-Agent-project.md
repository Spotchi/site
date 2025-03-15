---
layout: post
title: "File Librarian: a gateway project to agentic AI"
date: 2025-03-14 18:00:00
tags: AI, project, agents
use_math: false
heroImage: '/site/blog-placeholder-2.jpg'

---

I am currently exploring the world of agents. The last few years have provided developers with a boon for AI development and I felt the urge to leverage and apply this in my daily work. 
In order to learn a new technology, there is nothing better than to implement a project with it.

## Overview of the project
I am terrible at organizing my notes and folders in a consistent way. I know I am not alone there, and I see the potential to apply this technology more widely and in the enterprise, but for now I want to focus on getting something useful from the technology with the limited data and a personal use case.
Let's assume we have guidelines on how to organize a file folder.
### Task 1
Organize a set of files according to guidelines

### Task 2
Migrate a source folder into a target folder, all the while keeping with the guidelines imposed on the target folder.


### Approach
- Start simple
    - Limit the input used to reorganize files. For now we will use file and folder names only
    - Limit the approach to prompt engineering (no fine-tuning or )
    - Simple agent flow : 
        * Choose files and tasks
        * Suggest changes
        * Ask for confirmation
        * Execute changes
    - Chat interface based on create-llama
    - Integrate with `Phoenix` from the get go to keep track of the work done
- Improve by including deeper insights into wiki best practices
- Include file contents and metadata
- Optimize this by targeting sub-sections of the filebase

### First steps
- Engineer a prompt for the two use cases
- Engineer a prompt that will give a structured output
- Apply the prompt in a llama index agent
- Integrate with the `Next.js` UI
