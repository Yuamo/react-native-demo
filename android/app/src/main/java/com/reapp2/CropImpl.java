package com.reapp2;

import android.app.Activity;
import android.net.Uri;

import com.facebook.react.bridge.Promise;

/**
 * Created by Administrator on 2017/7/11.
 */

public class CropImpl implements Crop {

    @Override
    public void selectWithCrop(int outputX, int outputY, Promise promise) {
        final int RC_PICK=50081;
        final int RC_CROP=50082;
        final String CODE_ERROR_PICK="用户取消";
        final String CODE_ERROR_CROP="裁切失败";

        Promise pickPromise;
        Uri outPutUri;
        int aspectX;
        int aspectY;
        Activity activity;
//        public static CropImpl of(Activity activity) {
//
//        }
    }
}
