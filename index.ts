#!/usr/bin/env node
import inquirer from 'inquirer'

async function entry() {
    const wait = (ms= 1500) => new Promise((resolve) => setTimeout(resolve, ms));

    console.log('hello')
    await wait();
    console.log("You're lost in a forest...");
}