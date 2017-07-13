package com.reapp2;

import com.facebook.react.bridge.Promise;

/**
 * Created by Administrator on 2017/7/11.
 */

public interface Crop {
    /**
     * 选择并裁切照片
     * @ param outputX
     * @ param outputY
     * @ param promise
     */
    void selectWithCrop(int outputX, int outputY , Promise promise);
}
