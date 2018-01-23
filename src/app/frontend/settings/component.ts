// Copyright 2017 The Kubernetes Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {Component, OnInit} from '@angular/core';
import {Settings} from '@api/backendapi';

import {SettingsService} from '../common/services/global/settings';

@Component({selector: 'kd-settings', templateUrl: './template.html'})
export class SettingsComponent implements OnInit {
  global: Settings;
  isInitialized = false;

  constructor(public settings: SettingsService) {}

  ngOnInit() {
    this.settings.getGlobalSettings().subscribe((g) => {
      this.global = g;
      this.isInitialized = true;
    });
  }

  saveGlobal() {}

  // TODO ng-disabled="$ctrl.globalForm.$pristine"
}
