---
layout: post
title: "File Librarian: iterating your way to a useful agentic application"
date: 2025-03-14 18:00:00
tags: AI, project, agents
use_math: false
heroImage: '/site/filesystem-archi.png'

---
# Overview

The world has produced a lot of AI applications that let us talk to documents. They are useful for summarizing, or even creating new content with the help of our assistant.

One problem I am facing is: I am terrible at organizing my notes and folders in a consistent way. Using various code AI editors I have also noticed that without proper guidance of organization these tools regularly push a structure that might not suit your needs.

So this project is about building an AI agent that will reorganize a folder, all the while refining human- (and machine-)readable guidelines for this. Let's dive in!

## Table of Contents

1. [Task](#task)
2. [Approach](#approach)
   - [App Architecture](#app-architecture)
   - [Observability First](#observability-first)
3. [Tweaking the Agent](#tweaking-the-agent)
   - [The Basics: Prompt Engineering](#the-basics-prompt-engineering)
   - [Agentic Flow and Prompt Chaining](#agentic-flow-and-prompt-chaining)
   - [Bootstrapping an Agentic Dataset](#bootstrapping-an-agentic-dataset)
4. [Experimentation](#experimentation)
   - [All in One Agent](#all-in-one-agent)
   - [Orchestrator - Suggestor](#orchestrator---suggestor)
5. [Conclusion](#conclusion)
6. [Appendix](#appendix)
   - [Technology Discussion](#technology-discussion)
      - [Agentic Framework or Roll Your Own?](#agentic-framework-or-roll-your-own)

# Task

The agent will ultimately help with organization of files. We decided to focus on two specific subtasks:
1. Organize a set of files according to guidelines.
2. Migrate a source folder into a target folder, all the while keeping with the guidelines imposed on the target folder. This is a very real use-case for me since I recently tried out Obsidian as a note-taker and would love to migrate my notes from other tools into a unified structure.

# Approach
In as much as possible I want to focus on having the tools to improve my agent. I chose not to use one of the boutique AI applications as I wanted to add some UI specific to my use-case.

## App Architecture
In order to create a Chat UI quickly, I would recommend [create-llama](https://github.com/run-llama/create-llama) which is a great help for a quickstart. It utilises the [Vercel AI SDK](https://sdk.vercel.ai/docs/introduction) which I found helpful to stream Agent responses back. I am utilizing Supabase for authentication and storing chat memory.

The stack for this application is depicted below.

![File Librarian Architecture](../../../public/filesystem-archi.png)

## Observability First

Since our goal is not to focus on Application development, but indeed Agent development, I decided to center this project and blog post around instrumentation and how it can help us refine an agentic application. We are using [Arize's Phoenix](https://phoenix.arize.com/) in order to instrument our application, as it conveniently offers integrations and automatic instrumentations for LLamaIndex and most of the major AI providers.


## Tweaking the agent

### The Basics: Prompt Engineering
Prompt engineering is the foundation of building effective AI agents. It involves crafting precise and clear instructions for the AI to follow. In this project, we iteratively refined prompts to ensure the agent could understand and execute tasks related to file organization.

### Agentic Flow and Prompt Chaining
Agentic flow refers to the logical sequence of tasks an agent performs to achieve a goal. Prompt chaining is the process of breaking down complex tasks into smaller, manageable steps, where the output of one step serves as the input for the next. This approach was crucial for designing the workflows in this project.

### Bootstrapping an Agentic Dataset
Creating a dataset tailored to the agent's tasks is essential for training and evaluation. In this project, we bootstrapped a dataset by simulating file organization scenarios and collecting feedback from the agent's interactions. This iterative process helped improve the agent's accuracy and reliability.

# Experimentation

Once we got most of the non-AI moving pieces into place, it is time to iterate on our AI workflow and quality.

## All in One Agent

This agent uses file and folder structure. It has the following tools at its disposal:

* get_vault_tree: Get the structure of the vault.
* suggest_file_operations: Suggests a reorganization of files.
* apply_file_operations: Apply a reorganization of files.

Having a different `suggest_file_operations` and `apply_file_operations` allows us to ask for user confirmation.

## Orchestrator - Suggestor

This agent system consists of two different agents. This allows the suggestion agent to provide better suggestions as its task is limited in scope.
- Improve by including deeper insights into wiki best practices.

# Conclusion

It is useful to reuse the agentic tooling out there! I believe that the true value of an agentic application is the fruit of the experimentation process that we have outlined here.

Rather than merely being a prompt-engineering project, to be successful applications built this way have more than one moving piece:
- Agent Workflow (responsibility of each agent)
- Tools
- Context (broader than chat memory and retrieval)

# Appendix

## Technology Discussion

### Agentic Framework or Roll Your Own?

The following discussion is inspired by the [12 factor agent](https://github.com/humanlayer/12-factor-agents) which advocates for greater control over a range of aspects of agentic applications.

The agentic framework we choose offers workflow management and tool calling.

However it is true that a lot of things essential to the improvement of your agentic application are obfuscated by the framework.

To name only a few, context engineering, memory management, and the instrumentation are things that are done in a very opinionated way by LlamaIndex and might not be the best fit for your application, or even the most intuitive for that matter.

To give a concrete example, I started out building a workflow for the user to progress into, only to realize that every interaction with the user required either exiting (stopping) the workflow or emitting a specific event, which means you always get back to the same point in the workflow. So those workflows are not meant to be user facing.
