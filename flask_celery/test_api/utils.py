from functools import wraps
from flask import request, redirect
from . import app, redis
from crypto.Cipher import AES
from crypto import Random
import time
import random
import string
import base64


def check_signature(func):
    @wraps(func)
    def inner(*args, **kwargs):
        signature = request.args.get('signature', '')
        timestamp = request.args.get('timestamp', '')
        nonce = request.args.get('nonce', '')
    return inner


def init_wechat_sdk():
    access_token = redis.get("wechat:access_token")
    jsapi_ticket = redis.get("wechat:jsapi_ticket")
    token_expires_at = redis.get("wechat:access_token_expires_at")
    ticket_expires_at = redis.get("wechat:jsapi_ticket_expires_at")
