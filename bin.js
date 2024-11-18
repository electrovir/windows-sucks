#!/usr/bin/env node

import {runShellCommand} from '@augment-vir/node';


await runShellCommand('echo hi', {hookUpToConsole: true, rejectOnError: true,})