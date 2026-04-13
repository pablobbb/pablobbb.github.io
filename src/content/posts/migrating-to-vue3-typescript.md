---
title: "Migrating a legacy frontend to Vue 3 + TypeScript: what nobody tells you"
date: 2025-03-10
description: "The practical reality of migrating three legacy products to Vue 3 and TypeScript — the parts the tutorials skip."
tags: [vue, typescript, frontend, migration]
---

The Vue 3 migration guide is thorough. The TypeScript handbook is excellent. Neither of them will tell you what to do when you discover that a critical component relies on an internal Vue 2 API that was quietly removed, three days before the release deadline.

Here's what I learned migrating three products at QubicaAMF.

## Audit before you start

Before touching a line of code, spend a week understanding what you have. List every dependency, every component, every pattern. You will find things that shock you. Better to find them now.

We found a component that used `$children` to directly manipulate child state. That pattern doesn't exist in Vue 3. Refactoring it touched six other components. Add three days to your estimate.

## The Composition API is not optional

If you're migrating to Vue 3, migrate to the Composition API at the same time. Running Options API in Vue 3 works, but you get none of the benefits and all of the complexity of the migration. Do it once.

It's also a forcing function for better code. The Composition API makes bad patterns more obvious. When a component's setup function is 300 lines long, you know something is wrong. Options API hid this.

## TypeScript strict mode from day one

Start with `"strict": true`. Do not ease into it. The pain of fixing strict mode errors is real but finite. The pain of retrofitting strict mode into a mature codebase is not.

We enabled strict mode on day one and fixed every error before shipping. It took two extra weeks. It caught four bugs that would have reached production.

## Bundle size is not free

We reduced bundle size by ~25% across the three products. Not by cleverness — by removing things. Dependencies we'd added for convenience and never revisited. Polyfills for browsers we no longer supported. Utility functions that were three lines and a lodash import.

Audit your bundle before and after. The results will surprise you.

## The real timeline

Whatever you estimate, add 40%. Not because engineers are bad estimators, but because legacy code always contains surprises. Budget for discoveries.
