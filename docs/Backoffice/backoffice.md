---
title: Get Started
hide_title: true
sidebar_label: Get Started
---

A lending platform is not a single system—it is a collection of interconnected modules, each responsible for a specific part of the loan lifecycle.

From onboarding a customer to disbursing a loan, tracking repayments, and maintaining financial records, every component works in sync to deliver a seamless lending experience.

At a high level, the system is composed of three core layers:

## 🔷 1. Loan Origination System (LOS)

The Loan Origination System (LOS) handles everything that happens before a loan is approved.

This includes:

Capturing customer applications
Managing KYC and verification
Evaluating eligibility
Credit Scoring & Risk Rating
Processing approvals

## 🔷 2. Loan Management System (LMS)

Once a loan is approved and disbursed, control shifts to the Loan Management System (LMS).

This module is responsible for:

Repayment scheduling
Installment tracking
Interest calculation
Penalties and overdue handling
Loan closure

## 🔷 3. Financial & Accounting Layer

Every action in the system eventually translates into a financial transaction.

This layer ensures:

Accurate accounting through the Chart of Accounts (COA)
General Ledger (GL) postings
Journal entries
Financial reporting and reconciliation

![Lending System Architecture](/img/life-cycle.png)

## 🔗 How Everything Connects

These modules are not isolated—they are deeply integrated:

LOS collects and validates data → sends approved loans forward
LMS manages active loans → generates financial events
Financial systems record every transaction → ensure compliance and reporting

This integration ensures:

Data consistency across modules
Real-time financial visibility
Seamless customer experience

## ⚙️ System Workflow 

Here’s how a typical flow works across the system:

Customer applies for a loan (LOS)
Application is reviewed and approved (LOS)
Loan is disbursed and activated (LOS)
Repayments and schedules are managed (LMS)
Every transaction is recorded in the GL (Financial Layer)

## 🧩 Why This Structure Matters

This modular architecture provides:

Scalability → Each module can evolve independently
Flexibility → Easy integration with external systems (payments, KYC, etc.)
Accuracy → Financial data is centralized and consistent
Control → Clear separation of responsibilities across the system