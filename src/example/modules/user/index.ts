'use strict';

import { module, importResolvers, rule, Resolver, Schema, exported } from '../../../decorators';

const requestExists = (context: any): boolean => !!context;

@module('User', importResolvers('Setting', 'getSettings'))
class User {

  @Resolver(exported())
  @rule(requestExists)
  public user(root: any, args: any, context: any) {
    return {
      id: '1',
      name: 'daniel',
      address: {
        line1: 'line1',
        postcode: 'ne23 ftg',
      },
    };
  }

  @Resolver()
  public friends(root: any, args: any, context: any) {
    return [{
      name: 'graeme',
    }];
  }

  @Schema()
  public friendsSch() {
    return `
      type Friend {
        name: String
      }
    `;
  }

  @Schema()
  public address() {
    return `
      type Address {
        line1: String
        postcode: String
      }
    `;
  }

  @Schema()
  public basic() {
    return `
      type User {
        id: String
        name: String
        address: Address
        friends: [Friend]
        getSettings: [Setting]
      }
    `;
  }

}

export default new User();